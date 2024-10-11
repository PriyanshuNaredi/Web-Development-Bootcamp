`index.ejs`

      <form action="/weather" method="get">
        <input type="text" name="city" placeholder="Enter city name" />
        <button type="submit">Get Weather</button>
      </form>
`test.ejs`

    <form action="/weather" method="POST">
        <input type="text" name="city" placeholder="Enter city name" />
        <button type="weather">Get Weather</button>
    </form>

<!-- `button type should have same value as that of route or else server will crash and ask to add "/get" method. ` -->


`test.js uses "POST" method to get the weather of the city.`
`index.js uses "GET" method to get the weather of the city.`