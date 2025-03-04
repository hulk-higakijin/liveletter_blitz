const Avatar = ({ thumbnailUrl }: { thumbnailUrl?: string }) => {
  const DEFAULT_IMAGE_URL =
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"

  return (
    <div className="avatar">
      <div className="w-10 rounded-full">
        <img src={thumbnailUrl || DEFAULT_IMAGE_URL} />
      </div>
    </div>
  )
}

export default Avatar
