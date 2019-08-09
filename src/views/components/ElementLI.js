const elementLI = {
  render: publication => {
      return `<li>
                <div>
                    <p>  ${publication.user} </p>
                    <p>${publication.value}</p>
                    <p> ${publication.date}</p>
                </div>
              </li>`;
    }
  };

export default elementLI;
