<template>
  <div>
    <div>Header</div>
    <menu>
      <div>Menu 1</div>
      <div>Menu 2</div>
      <div>Menu 3</div>
      <div>Menu 4</div>
      <div>Menu 5</div>
    </menu>
    <!-- <button @click="makePDF">Download PDF</button>
    <button @click="exportCSV">Export CSV</button> -->
  </div>
</template>

<script>
// import { jsPDF } from 'jspdf'
export default {
  name: 'IndexPage',
  mounted() {
    this.getUsers()
  },
  methods: {
    // makePDF() {
    //   // eslint-disable-next-line new-cap
    //   const doc = new jsPDF()
    //   const imgLogo = new Image()
    //   imgLogo.src =
    //     'https://lyg22061-storage.s3.ap-northeast-1.amazonaws.com/locomo-7/1.png'

    //   doc.text('Hello world!', 10, 10)
    //   doc.addImage(imgLogo, 'PNG', 24, 8)
    //   doc.save('a4.pdf')
    // },
    // exportCSV() {
    //   const rows = [
    //     ['name1', 'city1', 'some other info'],
    //     ['name2', 'city2', 'more info'],
    //   ]

    //   const csvContent =
    //     'data:text/csv;charset=utf-8,' + rows.map((e) => e.join(',')).join('\n')
    //   const encodedUri = encodeURI(csvContent)
    //   const link = document.createElement('a')
    //   link.setAttribute('href', encodedUri)
    //   link.download = 'thành' + '.csv'
    //   link.click()
    // },
    getUser() {
      // try {
      //   const res = await this.service({
      //     path: '/users',
      //     method: 'get'
      //   })
      //   // eslint-disable-next-line no-console
      //   console.log('resGetUser', res)
      // } catch (error) {
      //   // eslint-disable-next-line no-console
      //   console.log('errorGetUser', error)
      // }
    }
  },
}
</script>
<!-- <style></style> -->
