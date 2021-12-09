import Post from '../Post/Post'; 
import style from './Main.module.css';



const Main = ({
  posts
}) => {
  console.log(posts);
  return (
    <main className={style.main}>
      <h1>Sooooooooome Heading</h1>

      <div className={style.posts}>

        {posts.map(x =>
          <Post
            key={x.id}
            content={x.content}
            author={x.author}
          />
        )}
      </div>

    </main>
  )
}
export default Main;