import PostContentEditor from "../components/PostContentEditor"

export default async function Page() {
  return (
    <div className="container max-w-lg mx-auto px-4">
      <div className="flex flex-col gap-2 py-10">
        <input
          type="text"
          placeholder="Title"
          className="input border-0 focus:outline-none w-full p-0 text-xl"
        />
        <PostContentEditor />
      </div>
    </div>
  )
}
