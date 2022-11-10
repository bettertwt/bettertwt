const BLUE_CHECK_PATTERN =
  'svg path[d^="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"]';

const BLUE_AND_VERIFIED_BADGE = `
  <svg version="1.1" width="24px" height="24px" viewBox="0,0,24,24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" fill="#1da1f2"/>
  </svg>
`;

const BLUE_BADGE = `
  <svg viewBox="0 0 50 50" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="surface90244776">
    <path style=" stroke:none;fill-rule:nonzero;fill:#1D9BF0;fill-opacity:1;" d="M 25 2 C 12.316406 2 2 12.316406 2 25 C 2 37.683594 12.316406 48 25 48 C 37.683594 48 48 37.683594 48 25 C 48 12.316406 37.683594 2 25 2 Z M 36.238281 20.523438 C 36.246094 20.761719 36.253906 21 36.253906 21.242188 C 36.253906 28.558594 30.679688 37 20.492188 37 C 17.363281 37 14.449219 36.082031 12 34.511719 C 12.433594 34.5625 12.871094 34.589844 13.320312 34.589844 C 15.917969 34.589844 18.304688 33.703125 20.199219 32.21875 C 17.777344 32.175781 15.730469 30.570312 15.023438 28.371094 C 15.363281 28.4375 15.710938 28.472656 16.070312 28.472656 C 16.574219 28.472656 17.0625 28.402344 17.527344 28.277344 C 14.996094 27.765625 13.085938 25.527344 13.085938 22.84375 C 13.085938 22.820312 13.085938 22.796875 13.085938 22.773438 C 13.832031 23.1875 14.6875 23.4375 15.59375 23.46875 C 14.105469 22.472656 13.132812 20.777344 13.132812 18.855469 C 13.132812 17.84375 13.402344 16.890625 13.878906 16.070312 C 16.613281 19.421875 20.695312 21.628906 25.296875 21.859375 C 25.203125 21.453125 25.152344 21.03125 25.152344 20.597656 C 25.152344 17.539062 27.632812 15.058594 30.691406 15.058594 C 32.285156 15.058594 33.726562 15.730469 34.734375 16.808594 C 35.996094 16.558594 37.183594 16.097656 38.253906 15.464844 C 37.839844 16.757812 36.960938 17.84375 35.816406 18.527344 C 36.9375 18.390625 38.003906 18.097656 39 17.65625 C 38.257812 18.765625 37.316406 19.742188 36.238281 20.523438 Z M 36.238281 20.523438 "/>
    </g>
  </svg>
`;

function setBlueBadge(elm) {
  elm.parentElement.innerHTML = BLUE_BADGE;
}

function setBlueAndVerifiedBadge(elm) {
  elm.parentElement.innerHTML = BLUE_AND_VERIFIED_BADGE;
}

const headerNode =
  "span.css-901oao.css-16my406.r-xoduu5.r-18u37iz.r-1q142lx.r-poiln3.r-bcqeeo.r-qvutc0";
const tweets =
  "div.css-901oao.r-xoduu5.r-18u37iz.r-1q142lx.r-37j5jr.r-16dba41.r-bcqeeo.r-qvutc0";
const profileNode =
  "span.css-901oao.css-16my406.r-xoduu5.r-18u37iz.r-1q142lx.r-poiln3.r-adyw6z.r-135wba7.r-bcqeeo.r-qvutc0";

const search = `form > * > * > * > * > * > * > * > * > * > * > * > * > ${tweets}`;
const chat = `#layers > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > ${tweets}`;
const youMightLike = `div > aside > div:nth-child(2) > * > * >* > * > * > * > * > a > div > ${tweets}`;

async function observeDOM() {
  const observer = new MutationObserver(function (mutations, _observer) {
    for (const mutation of mutations) {
      // run query selector on each added node
      const selectors = [
        search,
        chat,
        youMightLike,
        headerNode,
        tweets,
        profileNode,
      ];
      for (const selector of selectors) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === 1) {
            const elms = node.querySelectorAll(selector);
            for (const elm of elms) {
              const svg = node.querySelector(BLUE_CHECK_PATTERN);
              if (svg) {
                const names = Object.getOwnPropertyNames(elm);
                const reactPropsName = names.find((name) =>
                  name.startsWith("__reactProps")
                );
                if (!reactPropsName) {
                  console.log("Couldn't find react props", node);
                  continue;
                }
                const props = elm[reactPropsName];
                const isVerified =
                  props.children.props.children[0][0].props.isVerified;
                const isBlueVerified =
                  props.children.props.children[0][0].props.isBlueVerified;

                if (isBlueVerified && !isVerified) {
                  setBlueBadge(svg);
                } else if (isBlueVerified && isVerified) {
                  setBlueAndVerifiedBadge(svg);
                }
              }
            }
          }
        }
      }
    }
  });

  observer.observe(document, {
    childList: true,
    subtree: true,
  });
}

observeDOM();
