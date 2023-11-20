
    const apiUrl = 'https://api.sampleapis.com/codingresources/codingResources';
    let page = 1;
    let isLoading = false;

    function fetchData() {
      if (isLoading) return;
      isLoading = true;

      axios.get(`${apiUrl}?page=${page}&limit=4`)
        .then(res => {
          displayData(res.data);
          page++;
          isLoading = false;
        })
        .catch(error => {
          console.log(error);
          isLoading = false;
        });
    }

    function displayData(data) {
      const appElement = document.getElementById('app');

      data.forEach(item => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `<h3>${item.description}</h3>
          <h4>levels: ${item.levels}</h4>
          <p>topics: ${item.topics}</p>
          <p>URL: ${item.url}</p>
          <p>type: ${item.types}</p>`;
        appElement.appendChild(cardElement);
      });
    }

    // โหลดข้อมูลเริ่มต้น
    fetchData();

    // เพิ่ม Infinite Scroll
    window.addEventListener('scroll', function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        fetchData();
      }
    });
  