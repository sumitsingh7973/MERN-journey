import React from 'react'

import Card from './components/Card';
const App = () => {
  return (
    <div>
      <div className="parent">
        <Card company = "Amazon" img="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" time="5 Days Ago," position="Senior UI/UX Designer" avalability="Senior Level" payof="$120/hr" location="Banglore/India"/>

        <Card company="Flipcart" img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWzGxiYGlEM-IzG4PWRrn875F0LOcXLulhQ&s" time="1 Day Ago," position="Senior Developer" avalability="fulltime" payof="$100/hr" location="Punjab/India"/>

        <Card company="Myntra" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ2aVKHUduja9219ut8P9CFqhpJMjIk5dqog&s" time=" 4 Days Ago," position="Seo Executive" avalability="fulltime" payof="$110/hr" location="Banglore/India"/>

        <Card company="Saragarhi securities" img ="https://media.licdn.com/dms/image/v2/D4E0BAQF8NJEyu9NKfA/company-logo_200_200/company-logo_200_200/0/1694771928281?e=2147483647&v=beta&t=jSsKGrzEG07_q4JBfpiqTWIEVoJIByCJRFAAMLhedv8" time="7 Days Ago," position="Field Officer" avalability="fulltime" payof="$150/hr"location="Punjab/India"/>

        <Card company="Meesho" img="https://images.moneycontrol.com/static-mcnews/2023/06/Meesho-682x435.jpg?impolicy=website&width=1600&height=900" time="2 Days Ago," position="Telecaller" avalability="fulltime" payof="$150/hr" location="Haryana/India"/>

        <Card company="Blinkit" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjBgWsrhwRuIESGkEdGkw_F3ocQGsY_8HZFQ&s" time="6 Days Ago," position="Delivery Partner" avalability="fulltime" payof="$130/hr" location="Delhi/India"/ >

      </div>
    </div>

  )
}

export default App
