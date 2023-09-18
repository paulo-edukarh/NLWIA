import ytdl from "ytdl-core"

export const download = (videoId) => {
  const videoURL = "https://www.youtube.com/shorts" + videoId
  console.log("Realizando o downlaod do video:", videoId)

  ytdl(videoURL, { quality: "lowestaudio", fitlter: "audiopnly" }).on(
    "info",
    (info) => {
      const seconds = info.formats[0].approxdurationMs / 1000
      console.log(seconds)
    }
  )
}
