// sử dụng useState từ react
import { useState } from "react";

function App() {
// khởi tạo state với useState
  const [age, setAge] = useState(10);
  console.log(age); // thực hiện log state age mỗi khi component được đọc lại (re-render)
  const handleIncAge = () => {
    // cập nhật state
    setAge(age + 1);
  };

  return (
    <div className="app">
      <h1>Hello mọi người!</h1>
      <p>Mỗi năm tôi sẽ được tăng 1 tuổi</p>
      <p>Hiện tại tôi: {age} tuổi!</p>
      <button onClick={handleIncAge}>Tăng tuổi</button>
    </div>
  )
}

export default App;