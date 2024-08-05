export const AvatarBuilder = () => {
  return (
    <div className="flex flex-col items-center">
      <p>Build your awesome avatar!</p>
      <form className="flex flex-col">
        <label>Give it a name</label>
        <label>Pick a shirt colour</label>
        <label>Pick a shorts colour</label>
        <label>Pick a socks colour</label>
        <label>Pick a shoes colour</label>
      </form>
    </div>
  )
}