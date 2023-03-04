import { memo, ReactNode } from 'react'

type Props = {
  children: string | ReactNode
  onClickHnadler?: () => void
  buttonStyle?: string
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
}

export const Button = memo(
  ({ children, onClickHnadler, buttonStyle, type = 'button', disabled = false }: Props) => {
    return (
      <button onClick={onClickHnadler} className={buttonStyle} type={type} disabled={disabled}>
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
