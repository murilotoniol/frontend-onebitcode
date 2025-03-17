import Title from "./components/Title"
import Subtitle from "./components/Subtitle"
import StatusText from "./components/StatusText"

export default function App() {
	const tech = "React"
  const status = true

  return (
    <div>
      <Title />
      <Subtitle/>
      <StatusText/>
    </div>
  )
}