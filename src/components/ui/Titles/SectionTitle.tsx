
export default function SectionTitle({text , className } : { className?:string; text: string }) {
  return (
          <h2 className={`text-center 2xl:text-6xl lg:text-5xl font-bold  ${className}`}>{text}</h2>
  )
}
