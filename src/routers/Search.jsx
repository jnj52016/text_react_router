import { useSearchParams } from 'react-router-dom'

export default function Search() {
  const [sp, setSp] = useSearchParams()
  const page = Number(sp.get('page') || 1)
  return (
    <section>
      <h1>搜索页</h1>
      <p>当前页：{page}</p>
      <button onClick={() => setSp({ page: String(page + 1) })}>下一页</button>
    </section>
  )
}