
<?php


header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "message" => "Only POST requests are allowed."
    ]);
    exit;
}

require_once __DIR__ . "/config/database.php";

$data = json_decode(file_get_contents("php://input"), true);

$fullName = trim($data["full_name"] ?? "");
$username = trim($data["username"] ?? "");
$email = trim($data["email"] ?? "");
$password = $data["password"] ?? "";

if ($fullName === "" || $username === "" ||
    $email === "" || $password === "") {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "All fields are required."
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid email address."
    ]);
    exit;
}

if (strlen($password) < 8) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Password must be at least 8 characters."
    ]);
    exit;
}

if (!preg_match('/^[a-zA-Z0-9_]{3,30}$/', $username)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Username must be 3-30 characters and contain only letters, numbers, or underscores."
    ]);
    exit;
}

try {
    $check = $pdo->prepare(
        "SELECT id FROM users WHERE email = ? OR username = ?"
    );
    $check->execute([$email, $username]);

    if ($check->fetch()) {
        http_response_code(409);
        echo json_encode([
            "success" => false,
            "message" => "Email or username is already registered."
        ]);
        exit;
    }

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $pdo->prepare(
        "INSERT INTO users (full_name, username, email, password_hash)
         VALUES (?, ?, ?, ?)"
    );

    $stmt->execute([
        $fullName,
        $username,
        $email,
        $hashedPassword
    ]);

    http_response_code(201);
    echo json_encode([
        "success" => true,
        "message" => "Account created successfully!",
        "user_id" => $pdo->lastInsertId()
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Registration failed. Please try again."
    ]);
}
