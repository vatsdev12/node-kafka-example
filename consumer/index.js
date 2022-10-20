
import kafka from  "kafka-node";

try {
  const Consumer = kafka.Consumer;
  const client = new kafka.KafkaClient({localhost:9092});
  let consumer = new Consumer(
    client,
    [{ topic:"example", partition: 0 }],
    {
      autoCommit: true,
      fetchMaxWaitMs: 1000,
      fetchMaxBytes: 1024 * 1024,
      encoding: 'utf8',
      fromOffset: false
    }
  );
  consumer.addTopics([{ topic:"demo", partition: 0 }])
  consumer.on('message', async function (message) {
    console.log('here');
    console.log(
      'kafka-> ',
      message.value
    );
  })
  consumer.on('error', function (err) {
    console.log('error', err);
  });
}
catch (e) {
  console.log(e);
}