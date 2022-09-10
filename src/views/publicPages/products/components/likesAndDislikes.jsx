import React, { useState } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

import { DivLike } from './likesAndDislikesStyles'

export default function LikesAndDislikes(props) {
  const [likesArray, setLikesArray] = useState(
    JSON.parse(localStorage.getItem('likesProShops')),
  )

  const product = props.product
  return (
    <>
      {likesArray &&
      likesArray.filter(like => like === product._id).length > 0 ? (
        <DivLike color={'red'}>
          <FavoriteIcon
            onClick={() => {
              const likesInLocalStorage = JSON.parse(
                localStorage.getItem('likesProShops'),
              )

              if (likesInLocalStorage === null) {
                localStorage.setItem(
                  'likesProShops',
                  JSON.stringify([product._id]),
                )
              } else {
                const filterIdLiked = likesInLocalStorage.filter(
                  likedId => likedId === product._id,
                )

                const LikeAndDislike =
                  filterIdLiked.length === 0
                    ? [...likesInLocalStorage, product._id]
                    : likesInLocalStorage.filter(
                        likedId => likedId !== product._id,
                      )

                localStorage.setItem(
                  'likesProShops',
                  JSON.stringify(LikeAndDislike),
                )
                setLikesArray(LikeAndDislike)
                props.setLikes(product._id)
              }
            }}
          />
          {product.likes > 0 && product.likes}
        </DivLike>
      ) : (
        <DivLike color={'#555555'}>
          <FavoriteBorderIcon
            onClick={() => {
              const likesInLocalStorage = JSON.parse(
                localStorage.getItem('likesProShops'),
              )

              if (likesInLocalStorage === null) {
                localStorage.setItem(
                  'likesProShops',
                  JSON.stringify([product._id]),
                )
              } else {
                const filterIdLiked = likesInLocalStorage.filter(
                  likedId => likedId === product._id,
                )

                const LikeAndDislike =
                  filterIdLiked.length === 0
                    ? [...likesInLocalStorage, product._id]
                    : likesInLocalStorage.filter(
                        likedId => likedId !== product._id,
                      )

                localStorage.setItem(
                  'likesProShops',
                  JSON.stringify(LikeAndDislike),
                )
                setLikesArray(LikeAndDislike)
                const likeOrDislike =
                  filterIdLiked.length === 0 ? 'like' : 'dislike'
                props.setLikes(product._id, likeOrDislike)
              }
            }}
          />
          {product.likes > 0 && product.likes}
        </DivLike>
      )}
    </>
  )
}
