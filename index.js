const FAQ = [
    {
        q: "How much does Photoshop cost?",
        a: "Plans start at US$22.99/mo."
    },
    {
        q: "Can you use Photoshop to edit videos?",
        a: "Yes, you can use Photoshop to edit videos."
    },
    {
        q: "Is Photoshop available without a subscription?",
        a: "Photoshop is only available as part of a Creative Cloud plan, which includes the latest features, updates, fonts, and more."
    }
];

// add code here if needed

function processBackgroundColor(el) {
    // add code here
}
function processHero(el) {
    processBackgroundColor(el);
    // add code here
}
function processBrick(el) {
    processBackgroundColor(el);
    // add code here
}
function processFaq(el) {
    // improve this code
    el.innerHTML = `
        <div class="faq-set">
            <div class="question">
                <div>
                    <h3>${FAQ[0].q}</h3>
                </div>
            </div>
            <div class="answer">
                <div>
                    <p>${FAQ[0].a}</p>
                </div>
            </div>
        </div>
        <div class="faq-set">
            <div class="question">
                <div>
                    <h3>${FAQ[1].q}</h3>
                </div>
            </div>
            <div class="answer">
                <div>
                    <p>${FAQ[1].a}</p>
                </div>
            </div>
        </div>
        <div class="faq-set">
            <div class="question">
                <div>
                    <h3>${FAQ[2].q}</h3>
                </div>
            </div>
            <div class="answer">
                <div>
                    <p>${FAQ[2].a}</p>
                </div>
            </div>
        </div>`;
    // add code here
}
function processBanner(el) {
    // add code here
}
document.querySelectorAll('.hero').forEach(processHero);
document.querySelectorAll('.brick').forEach(processBrick);
document.querySelectorAll('.faq').forEach(processFaq);
document.querySelectorAll('.banner').forEach(processBanner);