export default async function handler(req, res) {
    let data = await fetch("../../data.js")
    console.log('data', data)
    res.status(200).json({ name: 'John Doe' })
  }
  