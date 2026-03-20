export default function mybookingLayout(
  {children, profile, manage} :
  {children:React.ReactNode, profile:React.ReactNode, manage:React.ReactNode}
) {
  return (
    <div>
      {children}
      {profile}
      {manage}
    </div>
  )
}