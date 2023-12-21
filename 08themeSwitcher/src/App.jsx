
import './App.css'
import { ThemeContext } from './contexts/Theme'

function App() {


  return (
      <ThemeContext value={{themeMode, lightTheme, darkTheme}}>

        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    {/* txtBtn */}
                </div>

                <div className="w-full max-w-sm mx-auto">
                    {/* Card */}
                </div>
            </div>
        </div>

      </ThemeContext>    

  )
}

export default App