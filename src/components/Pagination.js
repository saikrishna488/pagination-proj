const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []

    for(let i = 1; i<=Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i)
    }
  return (
    <div className="pages">
        {pageNumbers.map((page)=>(
            <a onClick={()=> paginate(page)} href="#" className="page-no" key={page}>{page}</a>
        ))}
    </div>
  )
}

export default Pagination
