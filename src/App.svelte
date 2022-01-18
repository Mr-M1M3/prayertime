<script>
  // imports css files
  import "./tailwind.css";
  // dom variables

  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let time = `${hour} : ${minute} : ${second}`;
  setInterval(() => {
    let updatedTime = new Date();
    let updatedHour = updatedTime.getHours();
    let updatedMinute = updatedTime.getMinutes();
    let updatedSecond = updatedTime.getSeconds();
    time = `${updatedHour} : ${updatedMinute} : ${updatedSecond}`;
  }, 1000);

  const GET_COORDS = new Promise((acc, rej) => {
    if (!navigator.geolocation) {
      alert(
        "This browser is not supported, or did you disabled location service?"
      );
      rej("This browser is not supported");
      throw new Error("This browser is not supported!");
    }
    const geo = navigator.geolocation;
    geo.getCurrentPosition(
      (coordInstance) => {
        acc(coordInstance.coords);
      },
      (error) => {
        console.log(error)
        rej(
          `${
            error.code == 1
              ? "Permission denied"
              : "Couldn't locate you, try changing the browser"
          }`
        );
        alert(
          `${
            error.code == 1
              ? "Permission denied"
              : "Couldn't locate you, try changing the browser"
          }`
        );
      },
      {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeOut: 10000,
      }
    );
  });
  async function getLocation() {
    const coords = await GET_COORDS;
    const API = `https://nominatim.openstreetmap.org/reverse?format=json&zoom=18`;
    const url = `${API}&lat=${coords.latitude}&lon=${coords.longitude}`;
    const RESPONSE = await fetch(url);
    if (!RESPONSE.ok) {
      alert(
        "Failed to fetch Location data from remote server! Check your internet connection and try again."
      );
      return Promise.reject(
        "Failed to fetch Location data from remote server! Check your internet connection and try again."
      );
    }
    return RESPONSE.json();
  }
  async function getWeather() {
    const coords = await GET_COORDS;
    const API = `https://api.weatherapi.com/v1/current.json?key=b78dee21e1194e14bc250804221701&aqi=no`;
    const url = `${API}&q=${coords.latitude},${coords.longitude}`;
    const RESPONSE = await fetch(url);
    if (!RESPONSE.ok) {
      alert(
        "Failed to fetch Weather data from remote server! Check your internet connection and try again."
      );
      return Promise.reject(
        "Failed to fetch Weather data from remote server! Check your internet connection and try again."
      );
    }
    return RESPONSE.json();
  }
  async function getPrayerTime() {
    const coords = await GET_COORDS;
    const API = `https://api.aladhan.com/v1/timings?method=4`;
    const url = `${API}&latitude=${coords.latitude}&longitude=${coords.longitude}`;
    const RESPONSE = await fetch(url);
    if (!RESPONSE.ok) {
      alert(
        "Failed to fetch PrayerTime data from remote server! Check your internet connection and try again."
      );
      return Promise.reject(
        "Failed to fetch PrayerTime data from remote server! Check your internet connection and try again."
      );
    }
    return RESPONSE.json();
  }
  async function whichPrayerTime() {
    let times = await getPrayerTime();
    times = times.data.timings;

    const currentTime = new Date().getTime();
    const fajr = compareableTime(times.Fajr);
    const dhuhr = compareableTime(times.Dhuhr);
    const asr = compareableTime(times.Asr);
    const maghrib = compareableTime(times.Maghrib);
    const isha = compareableTime(times.Isha);
    const sunRise = compareableTime(times.Sunrise);
    const sunSet = compareableTime(times.Sunset);
    const imsak = compareableTime(times.Imsak);

    const isFajrTime = currentTime > fajr && currentTime < sunRise;
    const isDhuhrTime = currentTime > dhuhr && currentTime < asr;
    const isAsrTime = currentTime > asr && currentTime < sunSet;
    const isMaghribTime = currentTime > maghrib && currentTime < isha;
    const isIshaTime = currentTime > isha && currentTime < imsak;

    return isFajrTime
      ? "Fajr"
      : isDhuhrTime
      ? "Dhuhr"
      : isAsrTime
      ? "Asr"
      : isMaghribTime
      ? "Maghrib"
      : isIshaTime
      ? "Isha"
      : false;
  }
  function compareableTime(hh_mm) {
    const currentTime = new Date();
    const input_time = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      currentTime.getDate(),
      hh_mm.split(":")[0],
      hh_mm.split(":")[1],
      0
    );
    return input_time.getTime();
  }
</script>

<main class="font-alef">
  <h1
    class="text-2xl px-4 py-3 bg-gray-700 text-white text-center font-clock tracking-wider"
  >
    {time}
  </h1>

  {#await getLocation()}
    <p>Getting location...</p>
  {:then location}
    <p class="px-2 my-2 text-lg text-center">
      <span>Hey good people, you're in</span>
      <span class="font-bold">{location.address.city}</span>
      <span class="font-bold">
        {`${
          location.address.building && location.address.road
            ? `around ${location.address.building}, ${location.address.road}`
            : ""
        }`}
      </span>
    </p>
  {:catch error}
    <p class="text-red-500">{error}</p>
  {/await}

  {#await getWeather()}
    <p>Fetching Weather Data...</p>
  {:then data}
    <p class="text-lg text-center font-sans">
      Weather is <span class="font-bold">{data.current.temp_c}&deg;C</span>
    </p>
  {:catch error}
    <p class="text-red-500">{error}</p>
  {/await}

  {#await whichPrayerTime()}
    <p>Getting prayer time...</p>
  {:then prayerName}
    <p class="text-center my-2 text-xl font-bold">
      {!prayerName
        ? `It's not an usual time to pray Farj Salah`
        : `It's time to pray ${prayerName} salah`}
    </p>
  {:catch error}
    <p class="text-red-500">{error}</p>
  {/await}
  <!-- {} -->
</main>
