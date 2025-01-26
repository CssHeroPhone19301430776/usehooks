const isSameDep = (
  oldDep: React.DependencyList,
  newDep: React.DependencyList,
) => {
  if (oldDep.length !== newDep.length) return false;
  return oldDep.every((item, index) => Object.is(item, newDep[index]));
};

export default isSameDep;
