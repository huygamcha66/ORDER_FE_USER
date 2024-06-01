import { useState } from 'react'
import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'

const FillterExcel = () => {
  const [fileA, setFileA] = useState(null)
  const [fileB, setFileB] = useState(null)

  const handleFileAChange = (event) => {
    setFileA(event.target.files[0])
  }

  const handleFileBChange = (event) => {
    setFileB(event.target.files[0])
  }

  const handleRemoveFileA = () => {
    setFileA(null)
  }

  const handleRemoveFileB = () => {
    setFileB(null)
  }

  const processFiles = () => {
    if (!fileA || !fileB) {
      alert('Vui lòng tải lên cả hai file.')
      return
    }

    const readerA = new FileReader()
    const readerB = new FileReader()

    readerA.onload = (e) => {
      const dataA = new Uint8Array(e.target.result)
      const workbookA = XLSX.read(dataA, { type: 'array' })
      const sheetA = workbookA.Sheets[workbookA.SheetNames[0]]

      // Lấy dữ liệu từ dòng thứ 2 của fileA
      const dataAJson = XLSX.utils
        .sheet_to_json(sheetA, { header: 1 })
        .slice(1)

      // Lấy tiêu đề cột từ hàng đầu tiên của fileA
      const headerA = XLSX.utils.sheet_to_json(sheetA, { header: 1 })[0]

      // Giả sử cột thứ hai chứa số điện thoại
      const phoneNumbersA = dataAJson.map((row) => row[1])
      // eslint-disable-next-line no-console
      console.log('««««« phoneNumbersA »»»»»', phoneNumbersA)
      readerB.onload = (e) => {
        const dataB = new Uint8Array(e.target.result)
        const workbookB = XLSX.read(dataB, { type: 'array' })
        const phoneNumbersB = []

        // Lấy số điện thoại từ tất cả các sheet bắt đầu từ sheet thứ 2
        for (let i = 1; i < workbookB.SheetNames.length; i++) {
          const sheetB = workbookB.Sheets[workbookB.SheetNames[i]]
          if (sheetB) {
            // Chuyển đổi dữ liệu thành một mảng các hàng bắt đầu từ dòng thứ 8
            const dataBJson = XLSX.utils.sheet_to_json(sheetB, {
              header: 1,
              range: 7 // Dòng thứ 8 trong Excel (index 7)
            })
            dataBJson.forEach((row) => {
              if (row[1]) {
                phoneNumbersB.push(row[1])
              }
            })
          }
        }

        // eslint-disable-next-line no-console
        console.log('««««« phoneNumbersB »»»»»', phoneNumbersB)
        // Lọc các hàng trong fileA mà số điện thoại không có trong phoneNumbersB
        const filteredNumbers = dataAJson.filter(
          (row) => !phoneNumbersB.includes(row[1])
        )

        // Tạo file Excel mới với định dạng đúng theo cột như fileA
        const wsData = [headerA, ...filteredNumbers]
        const ws = XLSX.utils.aoa_to_sheet(wsData)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, 'Filtered Numbers')

        const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
        saveAs(
          new Blob([wbout], { type: 'application/octet-stream' }),
          'FilteredNumbers.xlsx'
        )
      }

      readerB.readAsArrayBuffer(fileB)
    }

    readerA.readAsArrayBuffer(fileA)
  }

  return (
    <div>
      <div>
        <label htmlFor="fileA">Chọn File A:</label>
        {!fileA ? (
          <input id="fileA" type="file" onChange={handleFileAChange} />
        ) : (
          <div>
            <span>{fileA.name}</span>
            <button onClick={handleRemoveFileA}>Xóa</button>
          </div>
        )}
      </div>
      <div>
        <label htmlFor="fileB">Chọn File B:</label>
        {!fileB ? (
          <input id="fileB" type="file" onChange={handleFileBChange} />
        ) : (
          <div>
            <span>{fileB.name}</span>
            <button onClick={handleRemoveFileB}>Xóa</button>
          </div>
        )}
      </div>
      <button onClick={processFiles}>Lọc và Tải file</button>
    </div>
  )
}

export default FillterExcel
