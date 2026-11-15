
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface BtnProps extends TouchableOpacityProps {
  label: string
}

export default function Button({ label, style, ...props }: BtnProps) {
  return (
    <TouchableOpacity
      style={[
        {
          height: 56,
          backgroundColor: '#2563eb',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 12,
        },
        style,
      ]}
      {...props}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: '800',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}
