import { Form, useActionData, useNavigation } from 'react-router-dom'

export async function action({ request }) {
  const fd = await request.formData()
  const email = fd.get('email')
  // 模拟提交
  await new Promise(r => setTimeout(r, 300))
  return { ok: true, email }
}

export default function Contact() {
  const res = useActionData()
  const nav = useNavigation()
  return (
    <section>
      <h1>联系</h1>
      <Form method="post">
        <input name="email" placeholder="邮箱" />
        <button disabled={nav.state === 'submitting'}>
          {nav.state === 'submitting' ? '提交中…' : '提交'}
        </button>
      </Form>
      {res?.ok && <p>已提交：{res.email}</p>}
    </section>
  )
}