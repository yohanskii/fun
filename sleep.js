const sleep = (n, isOk) =>
  new Promise((resolve, reject) => {
    if (isOk) {
      return setTimeout(() => resolve(), n);
    }

    return setTimeout(() => reject("ErrorMessage"), n);
  });

const sleepWithValue = (n, val) => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(val), n);
  });
};

const main = async () => {
  try {
    console.log("Start 3 secondes sleep");
    await sleep(3000, true);
    console.log("Finished 3 secondes sleep");

    const data = await sleepWithValue(3000, "hey hey");
    console.log("Data after 3 seconds => ", data);
  } catch (error) {
    console.error(error);
  }
};

main();
