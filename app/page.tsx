import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I am an AI and Machine Learning engineer with a strong focus on developing theorical practical, 
        data-driven solutions and hand-on projects in my Profolio and Work Experiences`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
