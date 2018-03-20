import differenceInDays from 'date-fns/difference_in_days'

exports.handler = function(event, context, callback) {
  const diff = differenceInDays(new Date(), new Date(2018, 0, 1))

  callback(null, {
    statusCode: 200,
    body: {
      current: Math.abs(diff) % 5 + 1,
      next: Math.abs(diff) + 1 % 5 + 1
    }
  })
}
