export const quote = (quote) => {
  return `
        <div class="quote-holder" id="quote-holder">
            <div class="quote" id="quote">
                <h4>
                    ${quote.quote}
                </h4>

                <p>
                    -${quote.author}
                </p>
            </div>

            <button id="refresh-btn" class="refresh-btn"><i class="fa-solid fa-rotate"></i></button>
        </div>
    `;
};
