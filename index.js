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

function addMetaTag() {
    const metaViewport = document.createElement('meta');
    metaViewport.name = 'viewport';
    metaViewport.content = 'width=device-width, initial-scale=1.0';
    document.head.appendChild(metaViewport);
}

function processHero(el) {
    el.querySelector("div:nth-child(1)")?.remove();
    
    const p = el.querySelector("p:nth-child(3)");
    p.classList.add("action-area");

    p.querySelector("a:nth-of-type(1)").classList.add("con-button");
    p.querySelector("b > a").classList.add("con-button", "blue");

    p.querySelectorAll("i").forEach(tag => {
        const parent = tag.parentNode;
        while (tag.firstChild) {
            parent.insertBefore(tag.firstChild, tag);
        }
        parent.removeChild(tag);
    });

    p.querySelectorAll("b").forEach(tag => {
        const parent = tag.parentNode;
        while (tag.firstChild) {
            parent.insertBefore(tag.firstChild, tag);
        }
        parent.removeChild(tag);
    });
}

function processBrick(el) {
    el.querySelector("div:nth-child(1)")?.remove();
    el.querySelector("p:nth-child(1)").classList.add("title");
    el.querySelector("p:nth-child(2)").classList.add("price");
    el.querySelector("p:nth-child(3)").classList.add("description");
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

    // Add click event listeners to FAQ
    const faqSets = el.querySelectorAll('.faq-set');

    faqSets.forEach(set => {
        set.addEventListener('click', function() {
            const button = this.querySelector('.faq-question-button');
            const expanded = button.getAttribute('aria-expanded') === 'true';
            
            // Collapse all other buttons
            faqSets.forEach(s => {
                const btn = s.querySelector('.faq-question-button');
                btn.setAttribute('aria-expanded', 'false');
                document.getElementById(btn.getAttribute('aria-controls')).setAttribute('aria-hidden', 'true');
            });

            // Expand the clicked one if it wasn't already expanded
            if (!expanded) {
                button.setAttribute('aria-expanded', 'true');
                document.getElementById(button.getAttribute('aria-controls')).setAttribute('aria-hidden', 'false');
            }
        });
    });
}

function processBanner(el) {
    el.querySelector("a").classList.add("con-button", "blue");

    const bElement = document.querySelector("b");
    const aElement = bElement.querySelector("a");
    bElement.parentNode.insertBefore(aElement, bElement);
    bElement.remove();

    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        el.style.display = hero.getBoundingClientRect().bottom < 0 ? 'flex' : 'none';
    });
}

addMetaTag()
document.querySelectorAll('.hero').forEach(processHero);
document.querySelectorAll('.brick').forEach(processBrick);
document.querySelectorAll('.faq').forEach(processFaq);
document.querySelectorAll('.banner').forEach(processBanner);