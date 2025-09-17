
export default function SectionTitle({text , className } : { className?:string; text: string }) {
  return (
    <h2 className={`text-center text-2xl xl:text-6xl laptop:text-5xl lg:text-4xl font-bold  ${className}`}>{text}</h2>
  )
}
