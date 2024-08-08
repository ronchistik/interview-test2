const heroData = [
    {
        title: "Do it all with Adobe Creative Cloud.",
        description: "Make anything you can imagine, from gorgeous images, graphics, and art to standout social posts, videos, PDFs, and more. Get 20+ apps in the All Apps plan plus generative AI tools powered by Adobe Firefly.",
        action: [
            { text: "Free trial", url: "https://commerce.adobe.com/store/recommendation?items[0][id]=E27CB5D79014ACAB6953B091CEA72228&co=US&lang=en&cli=mini_plans" },
            { text: "Buy now", url: "https://www.adobe.com/creativecloud/plans.html?plan=individual&filter=all&promoid=PYPVPZQK&mv=other" }
        ]
    }
];

const brickData = [
    {
        title: "Photoshop",
        price: "US$22.99/mo",
        description: "With Photoshop and generative AI, you can create gorgeous photos, rich graphics, and incredible art."
    },
    {
        title: "Illustrator",
        price: "US$20.99/mo",
        description: "Create beautiful vector art and illustrations with industry standard tools for drawing, color, and typography."
    },
    {
        title: "Lightroom",
        price: "US$9.99/mo",
        description: "Edit, organize, and share your best photos in Lightroom. New Lens Blur lets you instantly create a stunning portrait effect in any photo. And tap into a new streamlined editing experience in Lightroom for mobile."
    }
];

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

const bannerData = [
    {
        title: "Do it all with Adobe Creative Cloud.",
        cta: "Buy now",
        url: "https://www.adobe.com/creativecloud/plans.html?plan=individual&filter=all&promoid=PYPVPZQK&mv=other"
    }
];

function createLinks(actions) {
    return actions.map((link, index) =>
        `<a href="${link.url}" class="con-button ${index === 1 ? 'blue' : ''}">${link.text}</a>`
    ).join('');
}

function processHero(el) {
    const heroContent = heroData.map(hero => `
        <div>
            <h1>${hero.title}</h1>
            <p>${hero.description}</p>
            <p class="action-area">
                ${createLinks(hero.action)}
            </p>
        </div>
    `).join('');
    el.innerHTML = heroContent;
}

function processBrick(el) {
    const brickContent = brickData.map((brick, index) => `
        <div class="brick ${index === 1 ? 'double' : ''} ${index === 2 ? 'triple' : ''}">
            <div>
                <div>
                    <h3 class="title">${brick.title}</h3>
                    <p class="price">${brick.price}</p>
                    <p class="description">${brick.description}</p>
                </div>
            </div>
        </div>
    `).join('');
    el.innerHTML = brickContent;
}

function processFaq(el) {
    const faqContent = FAQ.map((faq, index) => `
        <div class="faq-set">
            <div class="question">
                <div>
                    <button aria-expanded="false" type="button" aria-controls="faq${index}_desc" class="faq-question-button"><h3>${faq.q}</h3></button>
                </div>
                <div id="faq${index}_desc" class="answer" aria-hidden="true">
                    <div>
                        <p>${faq.a}</p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    el.innerHTML = faqContent;

    // Event delegation for FAQ
    el.addEventListener('click', function(event) {
        let button = event.target;
        if (button.tagName === 'H3') {
            button = button.parentElement; // Get the button if H3 is clicked
        }
        if (button.classList.contains('faq-question-button')) {
            const expanded = button.getAttribute('aria-expanded') === 'true';
            const controlledPanel = document.getElementById(button.getAttribute('aria-controls'));

            // Collapse all answers
            el.querySelectorAll('.faq-question-button').forEach(b => {
                const panel = document.getElementById(b.getAttribute('aria-controls'));
                b.setAttribute('aria-expanded', 'false');
                panel.setAttribute('aria-hidden', 'true');
                panel.style.maxHeight = null; // Reset max-height for animation
            });

            // Expand the clicked answer if it was not already expanded
            if (!expanded) {
                button.setAttribute('aria-expanded', 'true');
                controlledPanel.setAttribute('aria-hidden', 'false');
                controlledPanel.style.maxHeight = controlledPanel.scrollHeight + 'px';
            }
        }
    });
}

function processBanner(el) {
    let bannerContent = '';
    bannerData.forEach(banner => {
        bannerContent += `
            <p>${banner.title}</p>
            <a class="con-button blue" href="${banner.url}">${banner.cta}</a>
        `;
    });
    el.innerHTML = bannerContent;

    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (hero.getBoundingClientRect().bottom < 0) {
            el.style.display = 'flex';
        } else {
            el.style.display = 'none';
        }
    });
}

document.querySelectorAll('.hero').forEach(processHero);
document.querySelectorAll('.brick').forEach(processBrick);
document.querySelectorAll('.faq').forEach(processFaq);
document.querySelectorAll('.banner').forEach(processBanner);