import kafka from "kafka-node";
try {
  const Producer = kafka.Producer;
  const client = new kafka.KafkaClient({ localhost: 9092 });
  const producer = new Producer(client);
  let payloadFirst = [
    {
      topic: "example",
      messages: "example topic"
    }
  ];
  let payloadSecond = [
    {
      topic: "demo",
      messages: "demo topic"
    }
  ];
  producer.on('ready', async function () {
    let push_first_status = producer.send(payloadFirst, (err, data) => {
      if (err) {
        console.log('[kafka-producer -> ' + payloadFirst[0].topic + ']: broker failed');
      } else {
        console.log('[kafka-producer -> ' + payloadFirst[0].topic + ']: broker success');
      }
    });

    let push_secound_status = producer.send(payloadSecond, (err, data) => {
      if (err) {
        console.log('[kafka-producer -> ' + payloadSecond[0].topic + ']: broker failed');
      } else {
        console.log('[kafka-producer -> ' + payloadSecond[0].topic + ']: broker success');
      }
    });
  });
  producer.on('error', function (err) {
    console.log(err);
    throw err;
  });
}
catch (e) {
  console.log(e);
}




