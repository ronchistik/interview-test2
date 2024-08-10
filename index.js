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

function addMetaTag() {
    let metaTag = document.createElement('meta');
    metaTag.name = "viewport";
    metaTag.content = "width=device-width, initial-scale=1";
    document.head.appendChild(metaTag);
}

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
    const bricks = document.querySelectorAll('.brick');
    bricks.forEach(brick => {
        const firstChildDiv = brick.firstElementChild;
        if (firstChildDiv && firstChildDiv.tagName === 'DIV') {
            // Add classes to the respective <p> tags
            const siblingDiv = firstChildDiv.nextElementSibling;
            if (siblingDiv) {
                const pTags = siblingDiv.querySelectorAll('p');
                if (pTags.length >= 3) {
                    pTags[0].classList.add('title');
                    pTags[1].classList.add('price');
                    pTags[2].classList.add('description');
                }

                // Delete the unnecessary sibling div (first child and sibling)
                const firstSiblingDiv = siblingDiv.previousElementSibling;
                if (firstSiblingDiv && firstSiblingDiv.tagName === 'DIV') {
                    brick.removeChild(firstSiblingDiv);
                }
            }
        }
    });
}

function processFaq(el) {
    let faqContent = '';
    FAQ.forEach((faq, index) => {
        faqContent += `
        <div class="faq-set">
            <div class="question">
                <div aria-expanded="false" aria-controls="faq${index}_desc" class="faq-question-button">
                    <h3>${faq.q}</h3>
                </div>
            </div>
            <div id="faq${index}_desc" class="answer" aria-hidden="true">
                <div>
                    <p>${faq.a}</p>
                </div>
            </div>
        </div>`;
    });

    el.innerHTML = faqContent;

    // Add event listeners to the buttons
    const buttons = el.querySelectorAll('.faq-question-button');
    buttons.forEach(button => {
        const parent = button.parentElement;
        button.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            buttons.forEach(b => {
                b.setAttribute('aria-expanded', 'false');
                document.getElementById(b.getAttribute('aria-controls')).setAttribute('aria-hidden', 'true');
            });

            if (!expanded) {
                this.setAttribute('aria-expanded', 'true');
                document.getElementById(this.getAttribute('aria-controls')).setAttribute('aria-hidden', 'false');
            }
        });
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

addMetaTag()
document.querySelectorAll('.hero').forEach(processHero);
document.querySelectorAll('.brick').forEach(processBrick);
document.querySelectorAll('.faq').forEach(processFaq);
document.querySelectorAll('.banner').forEach(processBanner);