
import { Text, TextInput, TextInputProps, View } from 'react-native'

interface InputProps extends TextInputProps {
    label: string
}

export default function Input({ label, style, ...props }: InputProps) {
    return (
        <View>
            <Text className="text-gray-800 font-medium mb-1">
                {label}
            </Text>

            <TextInput
                {...props}
                style={[
                    { color: '#111827' },
                    style,
                ]}
                placeholderTextColor="#9CA3AF"
                className="h-12 border border-gray-300 px-4 rounded-xl"
            />
        </View>
    )
}
