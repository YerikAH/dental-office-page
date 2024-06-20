import { IconStar } from "@tabler/icons-react";
import styles from "./review.module.css";

const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    // More reviews...
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Review = () => {
  return (
    <div className={styles.container}>
      <div className={styles.colSpan4}>
        <h2 className={styles.header}>Customer Reviews</h2>

        <div className={styles.reviewSummary}>
          <div>
            <div className={styles.ratingStars}>
              {[0, 1, 2, 3, 4].map((rating) => (
                <IconStar
                  key={rating}
                  className={classNames(
                    reviews.average > rating
                      ? styles.textYellow400
                      : styles.textGray300,
                    styles.h5
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="sr-only">{reviews.average} out of 5 stars</p>
          </div>
          <p className={styles.reviewCount}>
            Based on {reviews.totalCount} reviews
          </p>
        </div>

        <div className={styles.reviewData}>
          <h3 className="sr-only">Review data</h3>

          <dl>
            {reviews.counts.map((count) => (
              <div key={count.rating} className={styles.reviewItem}>
                <dt className={`${styles.ratingValue}`}>
                  {count.rating}
                  <span className="sr-only"> star reviews</span>
                </dt>
                <div aria-hidden="true" className={styles.starContainer}>
                  <IconStar
                    className={classNames(
                      count.count > 0
                        ? styles.textYellow400
                        : styles.textGray300,
                      styles.h5
                    )}
                    aria-hidden="true"
                  />
                  <div className={styles.progressBarContainer}>
                    {count.count > 0 && (
                      <div
                        className={styles.progressBar}
                        style={{
                          width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                        }}
                      />
                    )}
                  </div>
                </div>
                <dd className={styles.percentage}>
                  {Math.round((count.count / reviews.totalCount) * 100)}%
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.shareThoughts}>
          <h3 className={styles.shareHeader}>Share your thoughts</h3>
          <p className={styles.shareDescription}>
            If you’ve used this product, share your thoughts with other
            customers
          </p>
          <a href="#" className={styles.writeReviewButton}>
            Write a review
          </a>
        </div>
      </div>

      <div className={styles.recentReviews}>
        <h3 className="sr-only">Recent reviews</h3>

        <div>
          {reviews.featured.map((review) => (
            <div key={review.id} className={styles.review}>
              <img
                src={review.avatarSrc}
                alt={`${review.author}.`}
                className={styles.authorAvatar}
              />
              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>{review.author}</h4>
                <div className={styles.ratingStars}>
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <IconStar
                      key={rating}
                      className={classNames(
                        review.rating > rating
                          ? styles.textYellow400
                          : styles.textGray300,
                        styles.h5
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{review.rating} out of 5 stars</p>
              </div>
              <div
                className={styles.reviewContent}
                dangerouslySetInnerHTML={{ __html: review.content }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
