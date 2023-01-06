const imageDialog = document.querySelector('#image-dialog');
const videoDialog = document.querySelector('#video-dialog');

let dataList = [];

const showDialog = (value) => {
    switch (value) {
        case 'image':
            imageDialog.classList.add('show');
            break;
        case 'video':
            videoDialog.classList.add('show');
            break;
    }
}

const closeDialog = (value) => {
    switch (value) {
        case 'image':
            imageDialog.classList.remove('show');
            break;
        case 'video':
            videoDialog.classList.remove('show');
            break;
    }
}

const addImage = (value) => {
    const title = document.querySelector('#imageTitle').value;
    const url = document.querySelector('#imageUrl').value;
    dataList.push(
        {
            type: value,
            title,
            url
        }
    )
    printDataList();
    closeDialog(value);
}

const deleteItem = (index) => {
    dataList.splice(index, 1);
    printDataList()
}

const printDataList = () => {
    const bodyWrapper = document.querySelector('#bodyWrapper');
    bodyWrapper.textContent = '';
    for (let i = 0; i < dataList.length; i++) {
        switch (dataList[i].type) {
            case 'image':
                bodyWrapper.insertAdjacentHTML('beforeend',
                    `<div class="card-item-wrapper">
                    <div class="card-item-container">
                      <div class="image-area">
                        <img src="${dataList[i].url}" alt="">
                      </div>
                      <div class="action-area">
                        <div class="description">${dataList[i].title} ${i}번째 아이템</div>
                        <button class="delete-button" onclick="deleteItem(${i})">Delete</button>
                      </div>
                    </div>
                  </div>`
                )
                break;

            case 'video':
                bodyWrapper.insertAdjacentHTML('beforeend',
                    `<div class="card-item-wrapper">
                    <div class="card-item-container">
                      <div class="image-area">
                        <iframe width="400" height="200" src="${dataList[i].url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      </div>
                      <div class="action-area">
                        <div class="description">${dataList[i].title} ${i}번째 아이템</div>
                        <button class="delete-button" onclick="deleteItem(${i})">Delete</button>
                      </div>
                    </div>
                  </div>`
                )
                break;
        }
    }
}

