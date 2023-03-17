// num of grass before 1000000
// window.scrollTo({ top: 0, behavior: 'smooth' });

const html = document.documentElement;
const canvas = document.getElementById("animation-canvas");
const context = canvas.getContext("2d");
const footer = document.getElementById("footer");
const height = 1080;
const width = 1920;
const down_arrow = document.getElementById("down_arrow");

const text_block_1 = document.getElementById("text_block_1");

const frameCount = 80;
// const currentFrame = function(index){
//     console.log();
//     return "animation/"+(''+index).padStart(4, "0")+".jpg";
    
// }
const currentFrame = index => (
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
  )

footer.style.opacity="0";

const preloadImages = async () => {
    for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
    }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width = width;
canvas.height = height;
img.onload = function () {
    context.drawImage(img, 0, 0);
}



const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
    // context.canvas.width = width;
    // context.canvas.height = height;
}

window.addEventListener('scroll', () => {
    // the html.scrolltop method seems to be deprecated/doesn't work, so window.scrollY can be used instead
    const scrollTop = window.scrollY;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
        frameCount-1,
        Math.ceil(scrollFraction * frameCount)
    );

    requestAnimationFrame(() => updateImage(frameIndex + 1))
    console.log(frameIndex);
    if (frameIndex>10){
        footer.style.opacity=''+((frameIndex-70)/10);
    }
    else {
        footer.style.opacity = "0";
    }
    
    if (frameIndex > 3){
        down_arrow.hidden = true;
    }

    text_block_1.style.opacity = frameIndex/13;
    
});

preloadImages()