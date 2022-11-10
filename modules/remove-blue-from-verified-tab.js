function notActuallyVerifiedIds(users) {
  if (!users) {
    return [];
  }
  const notVerifiedIds = [];
  for (const [key, value] of Object.entries(users)) {
    if (
      (value.ext_is_blue_verified || value.is_blue_verified) &&
      !value.verified
    ) {
      notVerifiedIds.push(key);
    }
  }
  return notVerifiedIds;
}

function removeFromNotifications(data) {
  const notVerifiedIds = notActuallyVerifiedIds(data?.globalObjects?.users);

  if (notVerifiedIds.length > 0 && data?.globalObjects?.tweets) {
    for (const [tweetId, tweetObj] of Object.entries(
      data?.globalObjects?.tweets
    )) {
      if (notVerifiedIds.includes(tweetObj?.user_id_str)) {
        delete data?.globalObjects?.tweets[tweetId];
      }
    }
  }

  if (notVerifiedIds.length > 0 && data?.globalObjects?.notifications) {
    for (const [notificationId, notificationValue] of Object.entries(
      data?.globalObjects?.notifications
    )) {
      if (
        notificationValue?.message?.entities?.every((entry) =>
          notVerifiedIds.includes(entry?.ref?.user?.id)
        )
      ) {
        delete data?.globalObjects?.notifications[notificationId];
      } else if (
        notificationValue?.message?.entities?.some((entry) =>
          notVerifiedIds.includes(entry?.ref?.user?.id)
        )
      ) {
        notificationValue.message.entities =
          notificationValue.message.entities.filter(
            (entry) => !notVerifiedIds.includes(entry?.ref?.user?.id)
          );
        notificationValue.template.aggregateUserActionsV1.fromUsers =
          notificationValue.template.aggregateUserActionsV1.fromUsers.filter(
            (entry) => !notVerifiedIds.includes(entry?.user?.id)
          );
      }
    }
  }

  return data;
}

bettertwt.on("twt_fetch", (req) => {
  const { data, url } = req;

  if (url.includes("notifications/verified.json")) {
    req.data = removeFromNotifications(data);
  }
});
