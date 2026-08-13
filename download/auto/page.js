//get url hash
const version = "2.9.11";


$(document).ready(()=>{
    const URLS = {
        "macos":`https://github.com/adrianvla/mLearn/releases/download/v${version}/mLearn-${version}-universal.dmg`,
        "macos-zip":`https://github.com/adrianvla/mLearn/releases/download/v${version}/mLearn-${version}-universal-mac.zip`,
        "windows-x64-standalone":`https://github.com/adrianvla/mLearn/releases/download/v${version}/win-unpacked.zip`,
        "windows-x64-installer":`https://github.com/adrianvla/mLearn/releases/download/v${version}/mLearn.Setup.${version}-x64.exe`,
        "windows-arm64-standalone":`https://github.com/adrianvla/mLearn/releases/download/v${version}/win-arm64-unpacked.zip`,
        "windows-arm64-installer":`https://github.com/adrianvla/mLearn/releases/download/v${version}/mLearn.Setup.${version}-arm64.exe`,
        "linux-x64-standalone":`https://github.com/adrianvla/mLearn/releases/download/v${version}/mLearn-${version}.AppImage`,
        "linux-x64-installer":`https://github.com/adrianvla/mLearn/releases/download/v${version}/mLearn-${version}-linux-x64.zip`,
        "linux-arm64-standalone":`https://github.com/adrianvla/mLearn/releases/download/v${version}/mLearn-${version}-arm64.AppImage`,
        "linux-arm64-installer":`https://github.com/adrianvla/mLearn/releases/download/v${version}/mLearn-${version}-linux-arm64.zip`,
    };
    const hash = window.location.hash.replace("#","");
    if(URLS[hash]){
        $("title").text(`Download mLearn v${version} - ${hash}`);
        $(".version").text(`v${version}`);
        $(".platform-id").text(hash);
        $(".download a").attr("href",URLS[hash]);
        window.location.href = URLS[hash];
    }else{
        $("h1").text("An error has occured, please try again.");
        $("title").text(`Download mLearn - ERROR`);
    }
});