export default function({store, redirect}) {
  if(!store.getters['token/hasToken']) {
    redirect('/login')
  }
}