<template>
  <div class="contributor-profiles">
    <span class="heading"
      >Les profils des contributrices et contributeurs :</span
    >
    <ul>
      <li>
        Salariées et salariés en poste avec un temps dédié par leur organisation
        sur ecoCode
      </li>
      <li>
        Indépendantes et indépendants pour une contribution bénévole à l'Open
        Source
      </li>
      <li>Salariées et salariés sur leur temps libre...</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.contributor-profiles {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1rem;
  border-radius: 1rem;
  margin: 2rem 1rem;

  .heading {
    font-size: 1.3rem;
    font-weight: 900;
    color: var(--color-on-surface);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    li:before {
      content: " ";
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      flex-shrink: 0;
      background-image: url(@/assets/icons/chevrons.svg);
    }
  }
}
</style>
