var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');

convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    
    if (verifyURL(URLinput.value) == true)
    {
        sendURL(URLinput.value);
    }
    else
    {
        document.getElementById("text-result").innerHTML = "Insira um link do youtube válido...";
        document.getElementById("text-result").style = "color: #ff4d4d";
    }
});

function sendURL(URL)
{
    var URLBase = "baixarvideosgratis.vercel.app";

    window.location.href = `http://${URLBase}:4000/download?URL=${URL}`;
}

function isValidURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
};

function verifyURL(URL)
{
    var youtubeString = "youtube.com";
    var youtubeIDString = "watch?v=";

    if (isValidURL(URL) == true)
    {
        if (URL.includes(youtubeString) == true)
        {
            if (URL.includes(youtubeIDString) == true)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    }
    else
    {
        return false;
    }
}