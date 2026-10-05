import { useEffect, useState } from 'react'
import { VARIANT } from '../config'

function Reviews() {
  const [comments, setComments] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then(setComments)
      .catch((err) => setError(err.message))
  }, [])

  return (
    <section id="reviews" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 md:col-span-2">
      <h2 className="mb-3 border-b-2 border-sky-500 pb-1 text-2xl font-semibold text-slate-700 dark:text-slate-200">Reviews</h2>
      {error && <p className="text-red-500">Не вдалося завантажити відгуки: {error}</p>}
      <div className="grid gap-3 md:grid-cols-2">
        {comments.map((c) => (
          <article key={c.id} className="rounded-lg border-l-4 border-sky-500 bg-slate-50 p-3 dark:bg-slate-700">
            <h3 className="font-semibold">{c.name}</h3>
            <p className="text-sm text-sky-700 dark:text-sky-300">{c.email}</p>
            <p className="mt-1 text-sm">{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Reviews
