import { Icon } from "./Icon.jsx";
import { ResponsiveImage } from "./ResponsiveImage.jsx";

export function RecipeCard({ recipe }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
      
      {recipe.detailPath ? (
        <a href={recipe.detailPath} aria-label={`Ver ${recipe.title}`}>
          <ResponsiveImage
            mobileSrc={recipe.mobileImage}
            src={recipe.image}
            alt={recipe.alt}
            className="h-44 w-full object-cover"
          />
        </a>
      ) : (
        <div className="h-44 w-full overflow-hidden">
          <ResponsiveImage
            src={recipe.image}
            alt={recipe.alt}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="p-4">
        <h3 className="font-semibold text-slate-900">{recipe.title}</h3>
        <p className="text-sm text-slate-500">{recipe.description}</p>

        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="flex gap-2">
            
            {recipe.detailPath ? (
              <a href={recipe.detailPath} className="h-9 w-9 rounded-xl bg-slate-100 flex items-center justify-center">
                <Icon name="visibility" className="text-slate-700" />
              </a>
            ) : (
              <button className="h-9 w-9 rounded-xl bg-slate-100 flex items-center justify-center">
                <Icon name="visibility" className="text-slate-700" />
              </button>
            )}

            <button className="h-9 w-9 rounded-xl bg-slate-100 flex items-center justify-center">
              <Icon name="favorite" className="text-rose-600" />
            </button>
            <button className="h-9 w-9 rounded-xl bg-slate-100 flex items-center justify-center">
              <Icon name="edit" className="text-slate-700" />
            </button>
            <button className="h-9 w-9 rounded-xl bg-slate-100 flex items-center justify-center">
              <Icon name="share" className="text-slate-700" />
            </button>
          </div>

          <span className="text-xs font-semibold bg-slate-100 px-2 py-1 rounded-full">
            {recipe.time}
          </span>
        </div>
      </div>
    </article>
  );
}
