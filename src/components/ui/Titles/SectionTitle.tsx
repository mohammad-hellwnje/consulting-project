
export default function SectionTitle({text , className } : { className :string; text: string }) {
  return (
          <h2 className={`text-center text-4xl  ${className}`}>{text}</h2>
  )
}
