import React from 'react'

const Post = () => {
  return (
    <div className="post">
        <div className="image">
          <img src="https://www.technewsworld.com/wp-content/uploads/sites/3/2023/03/AI-chip.jpg" alt="" />
        </div>
        <div className="texts">
          <h2>Are Gen AI Benefits Worth the Risk?</h2>
          <p className="info">
            <a className="author">Rishabh</a>
            <time>2/9/2023 02:11</time>
          </p>
          <p className="summary">Tools like ChatGPT potential of generative AI in diverse sectors. However, concerns over false information propagation, and potential job loss underline the need for caution and regulation.</p>
        </div>
      </div>
  )
}

export default Post