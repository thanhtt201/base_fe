export default function (context) {
  // eslint-disable-next-line no-console
  console.log('context', context.store.getters.getUsers)
  if (!context.store.state) {
    return context.redirect('/product')
  }
}
