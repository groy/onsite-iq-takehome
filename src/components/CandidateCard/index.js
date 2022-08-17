import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import * as styles from './styled';

const CandidateCard = (props) => {
  const [newComment, updateNewComment] = useState('');
  const user = {
    name: {
      first: props.first,
      last: props.last,
    },
    email: props.email,
    id: props.id,
    status: props.status,
  };

  let expHtml;

  if (user.status) {
    let icon;
    // Decides what status to show for the user
    if (user.status === 'approved') {
      icon = <FontAwesomeIcon className={styles.approved} icon={solid('square-check')} />;
    } else {
      icon = <FontAwesomeIcon className={styles.rejected} icon={solid('square-xmark')} />;
    }
    // Provides a way to clear the candidates status
    expHtml = (
      <div className={styles.cdnResp}>
        <span>
          {icon} {user.status.toUpperCase()}
        </span>
        <div className={styles.btnContainer}>
          <button
            type="button"
            className={styles.btn}
            onClick={() => {
              props.updateCandidate(user.id, {
                type: 'updateStatus',
                status: undefined,
                comments: [...props.comments],
              });
            }}
          >
            Clear Status
          </button>
        </div>
      </div>
    );
  } else {
    // Provides the ability to Approve or reject candidate
    expHtml = (
      <div className={styles.cdnResp}>
        <input
          type="text"
          placeholder="Comments?"
          value={newComment}
          onChange={(evt) => updateNewComment(evt.target.value)}
        />
        <div className={styles.btnContainer}>
          <button
            type="button"
            className={styles.btn}
            onClick={() => {
              const cmts = [...props.comments];
              if (newComment !== '') {
                cmts.push({
                  user: { first: 'Greg', last: 'Royan' },
                  time: new Date().toLocaleString(),
                  comment: newComment,
                });
              }
              props.updateCandidate(user.id, {
                type: 'updateStatus',
                status: 'approved',
                comments: cmts,
              });
              updateNewComment('');
            }}
          >
            Approve
          </button>
          <button
            type="button"
            className={styles.rejectBtn}
            onClick={() => {
              const cmts = [...props.comments];
              if (newComment !== '') {
                cmts.push({
                  user: { first: 'Greg', last: 'Royan' },
                  time: new Date().toLocaleString(),
                  comment: newComment,
                });
              }
              props.updateCandidate(user.id, {
                type: 'updateStatus',
                status: 'rejected',
                comments: cmts,
              });
              updateNewComment('');
            }}
          >
            Reject
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.candidateCard}>
      <img className={styles.img} alt={`${props.first} ${props.last}`} src={props.thumbnail} />
      <h2>
        {props.first} {props.last}
      </h2>
      <div>
        <FontAwesomeIcon icon={regular('envelope')} /> {props.email}
        {props.comments.length > 0 &&
          props.comments
            .filter((el) => el && el.comment !== '')
            .map((comment, idx) => {
              // Comment component - Would separate this into another component
              return (
                <div className={styles.comment} key={`comment-${comment.time}`}>
                  <div className={styles.flexBetween}>
                    <div>
                      <h4>
                        {comment.user.first} {comment.user.last}
                      </h4>
                      <div className={styles.date}>{comment.time}</div>
                    </div>
                    <a
                      className={styles.deleteBtn}
                      role="button"
                      tabIndex={idx}
                      onKeyDown={(evt) => {
                        // Figured out how to trigger on keyboard nav for a11y
                        if (evt.keycode === 32) {
                          const cmts = [...props.comments.filter((el) => el.time !== comment.time)];
                          props.updateCandidate(user.id, {
                            type: 'updateComment',
                            comments: cmts,
                          });
                        }
                      }}
                      onClick={() => {
                        const cmts = [...props.comments.filter((el) => el.time !== comment.time)];
                        props.updateCandidate(user.id, {
                          type: 'updateComment',
                          comments: cmts,
                        });
                      }}
                    >
                      <FontAwesomeIcon icon={solid('circle-xmark')} />
                    </a>
                  </div>

                  <p className={styles.paragraph}>{comment.comment}</p>
                </div>
              );
            })}
      </div>
      {expHtml}
    </div>
  );
};

CandidateCard.propTypes = {
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  status: PropTypes.string,
  thumbnail: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.object),
  updateCandidate: PropTypes.func.isRequired,
};

CandidateCard.defaultProps = {
  status: undefined,
  comments: [],
  thumbnail:
    'https://mpng.subpng.com/20190501/eil/kisspng-user-profile-computer-icons-image-default-daniela-klasn-martin-societe-generale-securiti-5cca4fa5b997b2.1263112315567625337602.jpg',
};

export default CandidateCard;
